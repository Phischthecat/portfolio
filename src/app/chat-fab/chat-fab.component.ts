import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChatDialogComponent } from '../chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-chat-fab',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './chat-fab.component.html',
  styleUrls: ['./chat-fab.component.scss'],
})
export class ChatFabComponent implements OnInit {
  showHint = false;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showHint = true;
    }, 3500);
  }

  openChatDialog() {
    this.showHint = false;
    this.dialog.open(ChatDialogComponent, {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      maxHeight: '80vh',
      panelClass: 'custom-dialog-container',
    });
  }
}
