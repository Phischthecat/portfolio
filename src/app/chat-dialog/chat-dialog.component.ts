import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MarkdownModule,
  ],
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss'],
})
export class ChatDialogComponent {
  userInput = '';
  isLoading = false;

  constructor(
    public chatService: ChatService,
    public dialogRef: MatDialogRef<ChatDialogComponent>
  ) {}

  async sendMessage() {
    if (!this.userInput.trim()) return;

    const message = this.userInput;
    this.userInput = '';
    this.isLoading = true;

    await this.chatService.sendMessage(message);
    this.isLoading = false;

    setTimeout(() => {
      const messagesContainer = document.querySelector('.chat-messages');
      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }, 0);
  }

  clearChat() {
    this.chatService.messages.set([]);
  }

  closeChat() {
    this.dialogRef.close();
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
