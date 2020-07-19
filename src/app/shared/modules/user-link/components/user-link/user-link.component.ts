import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.scss'],
})
export class UserLinkComponent implements OnInit {
  @Input('username') usernameProps: string;
  @Input('userImage') userImageProps: string;
  @Input('date') dateProps: string;

  constructor() {}

  ngOnInit(): void {}
}
