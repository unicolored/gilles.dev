import { Injectable } from '@angular/core';
import { CloudinaryImage, CloudinaryVideo } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { dpr, format, quality } from '@cloudinary/url-gen/actions/delivery';
import { sharpen } from '@cloudinary/url-gen/actions/adjust';
import { colorize } from '@cloudinary/url-gen/actions/effect';
import { auto as autoQuality } from '@cloudinary/url-gen/qualifiers/quality';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';

export type CloudinaryCustomParams = Partial<{
  width: number | null;
  height: number | null;
  cloudName: string;
  dpr: string;
  colorize: { power: number; color: string };
  fill: string;
  sharpen: number;
}>;

@Injectable()
export class CloudinaryService {
  static defaultParams: CloudinaryCustomParams = { cloudName: 'unicolored', dpr: '2.0' };
  static mergeParams = (params: CloudinaryCustomParams): CloudinaryCustomParams => {
    return { ...CloudinaryService.defaultParams, ...params };
  };

  static getImage(id: string, inputParams: CloudinaryCustomParams): CloudinaryImage {
    const params = CloudinaryService.mergeParams(inputParams);
    const image = new CloudinaryImage(id, { cloudName: params.cloudName });
    if (params.width && params.height) {
      image.resize(fill().width(params.width).height(params.height).gravity('north'));
    } else if (params.width) {
      image.resize(fill().width(params.width).gravity('north'));
    } else if (params.height) {
      image.resize(fill().height(params.height).gravity('north'));
    }

    if (params.dpr) {
      image.delivery(dpr(params.dpr));
    }

    if (params.fill) {
      image.effect(colorize(100).color(params.fill));
    }

    if (params.colorize) {
      image.effect(colorize(params.colorize.power).color(params.colorize.color));
    }

    // image.quality('auto:good');
    image.delivery(quality(autoQuality()));
    image.delivery(format(autoFormat()));

    if (params.sharpen) {
      image.effect(sharpen(params.sharpen));
    }

    return image;
  }

  static getVideo(id: string, inputParams: CloudinaryCustomParams): CloudinaryVideo {
    const params = CloudinaryService.mergeParams(inputParams);
    const video = new CloudinaryVideo(id, { cloudName: params.cloudName });
    if (params.width && params.height) {
      video.resize(fill().width(params.width).height(params.height));
    } else if (params.width) {
      video.resize(fill().width(params.width));
    } else if (params.height) {
      video.resize(fill().height(params.height));
    }

    // if (params.dpr) {
    //   video.delivery(dpr(params.dpr));
    // }

    if (params.fill) {
      video.effect(colorize(100).color(params.fill));
    }

    if (params.colorize) {
      video.effect(colorize(params.colorize.power).color(params.colorize.color));
    }

    // image.quality('auto:good');
    video.delivery(quality(autoQuality()));
    video.delivery(format(autoFormat()));
    // video.effect(sharpen(85));

    return video;
  }

  static getImageUrl(id: string, params: CloudinaryCustomParams): string {
    return CloudinaryService.getImage(id, params).toURL();
  }

  static getVideoUrl(id: string, params: CloudinaryCustomParams): string {
    return CloudinaryService.getVideo(id, params).toURL();
  }
}
