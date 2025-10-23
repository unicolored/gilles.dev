import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-remote',
  imports: [],
  templateUrl: `remote.component.html`,
})
export class RemoteComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  remotePin = signal<number | null>(null); // Use number for pin
  isRemoteActive = computed<boolean>(() => !!this.remotePin());
  private readonly apiService = inject(ApiService);

  ngOnInit() {
    const remotePinParam = this.route.snapshot.paramMap.get('pin');
    const remotePin = remotePinParam ? parseInt(remotePinParam, 10) : null;
    if (remotePin && !isNaN(remotePin)) {
      this.remotePin.set(remotePin);
      this.apiService.connectRemote(remotePin, 'connect').subscribe({
        next: () => console.log('Remote connected'),
        error: (err) => console.error('Connect error:', err),
      });
    } else {
      //this.remotePin.set(localPin);  // Set local pin if no remote
    }
  }
}
