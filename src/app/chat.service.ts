import { Injectable, signal } from '@angular/core';
import { ChooseLangService } from './choose-lang.service';
import { TranslateService } from '@ngx-translate/core';

export interface Message {
  role: 'user' | 'bot';
  text: string;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private prompt = '';

  public messages = signal<Message[]>([]);

  constructor(
    public lang: ChooseLangService,
    public translate: TranslateService
  ) {
    this.loadContextPrompt();
  }

  async sendMessage(prompt: string) {
    this.messages.update((prev) => [...prev, { role: 'user', text: prompt }]);
    try {
      const systemInstruction = this.systemInstruction();
      const body = JSON.stringify({
        system_instruction: {
          parts: [{ text: systemInstruction }],
        },
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
      });
      const response = await fetch('https://philschmucker.de/proxy.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
      if (!response.ok) throw new Error('Proxy-Fehler: ' + response.status);
      const data = await response.json();
      const noAnswer = this.translate.instant('CHAT_NO_ANSWER_MESSAGE');
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || noAnswer;
      this.messages.update((prev) => [...prev, { role: 'bot', text }]);
    } catch (error: any) {
      const isOverloaded =
        error.message.includes('503') || error.message.includes('429');
      console.error('Fehler beim Chat:', error);
      const errorMessage = isOverloaded
        ? this.translate.instant('CHAT_ERROR_OVERLOADED_MESSAGE')
        : this.translate.instant('CHAT_ERROR_MESSAGE');
      this.messages.update((prev) => [
        ...prev,
        { role: 'bot', text: errorMessage },
      ]);
    }
  }

  private loadContextPrompt() {
    const txtUrl = 'https://philschmucker.de/prompt.txt';
    fetch(txtUrl)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
        throw new Error('Failed to load');
      })
      .then((text) => {
        if (text && text.trim()) {
          this.prompt = text;
        } else {
          this.prompt = this.fallbackCV();
        }
      })
      .catch(() => {
        this.prompt = this.fallbackCV();
      });
  }

  private fallbackCV() {
    return `Phil Schmucker — Frontend-Entwickler. Schwerpunkte: Angular, TypeScript, TDD, Ionic. Er entwickelt das \"Insight Control Panel\". Hintergrund: Mediaberatung und Vertrieb; kaufmännische Ausbildung.`;
  }

  private systemInstruction() {
    return (
      this.prompt +
      (this.lang.choosenLang === 'de'
        ? '\nAntworte auf Deutsch.'
        : '\nAnswer in English.')
    );
  }
}
