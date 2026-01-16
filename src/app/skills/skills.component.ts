// skills.component.ts
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  id: string;
  name: string;
  icon: string;
  size: string;
}

interface Position {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

type ScreenSize = 'mobile' | 'tablet' | 'desktop';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false,
})
export class SkillsComponent implements OnInit, OnDestroy {
  private secondsPerLayout = 4;
  private intervalId: any;
  private currentLayout = 0;
  screenSize: ScreenSize = 'desktop';

  constructor(private cdr: ChangeDetectorRef) {}

  skills: Skill[] = [
    { id: 'angular', name: 'Angular', icon: 'angular.svg', size: 'medium' },
    {
      id: 'typescript',
      name: 'Typescript',
      icon: 'typescript.svg',
      size: 'medium',
    },
    {
      id: 'javascript',
      name: 'Javascript',
      icon: 'javascript.svg',
      size: 'small',
    },
    { id: 'html', name: 'HTML', icon: 'html.svg', size: 'small' },
    { id: 'css', name: 'CSS', icon: 'css.svg', size: 'small' },
    { id: 'firebase', name: 'Firebase', icon: 'firebase.svg', size: 'medium' },
    { id: 'git', name: 'Git', icon: 'git.svg', size: 'small' },
    { id: 'scrum', name: 'Scrum', icon: 'scrum.svg', size: 'small' },
    { id: 'rest-api', name: 'Rest-API', icon: 'rest-api.svg', size: 'small' },
    { id: 'figma', name: 'Figma', icon: 'figma.svg', size: 'small' },
    { id: 'docker', name: 'Docker', icon: 'docker.png', size: 'medium' },
    { id: 'mysql', name: 'MySQL', icon: 'mysql.svg', size: 'medium' },
  ];

  // Desktop Layouts (4 Spalten)
  desktopLayouts: Position[][] = [
    [
      { id: 'angular', x: 0, y: 0, w: 1, h: 1 },
      { id: 'typescript', x: 1, y: 0, w: 1, h: 1 },
      { id: 'firebase', x: 2, y: 0, w: 2, h: 2 },
      { id: 'javascript', x: 0, y: 1, w: 1, h: 1 },
      { id: 'html', x: 1, y: 1, w: 1, h: 1 },
      { id: 'css', x: 0, y: 2, w: 1, h: 1 },
      { id: 'mysql', x: 1, y: 2, w: 2, h: 1 },
      { id: 'docker', x: 3, y: 2, w: 1, h: 1 },
      { id: 'git', x: 0, y: 3, w: 1, h: 1 },
      { id: 'scrum', x: 1, y: 3, w: 1, h: 1 },
      { id: 'figma', x: 2, y: 3, w: 1, h: 1 },
      { id: 'rest-api', x: 3, y: 3, w: 1, h: 1 },
    ],
    [
      { id: 'angular', x: 0, y: 0, w: 1, h: 2 },
      { id: 'typescript', x: 1, y: 0, w: 2, h: 1 },
      { id: 'javascript', x: 1, y: 1, w: 1, h: 1 },
      { id: 'html', x: 2, y: 1, w: 1, h: 1 },
      { id: 'firebase', x: 3, y: 0, w: 1, h: 2 },
      { id: 'css', x: 0, y: 2, w: 2, h: 1 },
      { id: 'mysql', x: 2, y: 2, w: 1, h: 1 },
      { id: 'rest-api', x: 3, y: 2, w: 1, h: 1 },
      { id: 'git', x: 1, y: 3, w: 1, h: 1 },
      { id: 'scrum', x: 0, y: 3, w: 1, h: 1 },
      { id: 'figma', x: 2, y: 3, w: 1, h: 1 },
      { id: 'docker', x: 3, y: 3, w: 1, h: 1 },
    ],
    [
      { id: 'angular', x: 0, y: 0, w: 1, h: 1 },
      { id: 'javascript', x: 1, y: 0, w: 1, h: 2 },
      { id: 'typescript', x: 2, y: 0, w: 1, h: 1 },
      { id: 'firebase', x: 3, y: 0, w: 1, h: 1 },
      { id: 'scrum', x: 0, y: 1, w: 1, h: 3 },
      { id: 'html', x: 2, y: 1, w: 2, h: 1 },
      { id: 'css', x: 1, y: 2, w: 1, h: 1 },
      { id: 'mysql', x: 2, y: 2, w: 1, h: 1 },
      { id: 'docker', x: 3, y: 2, w: 1, h: 1 },
      { id: 'figma', x: 1, y: 3, w: 1, h: 1 },
      { id: 'git', x: 2, y: 3, w: 1, h: 1 },
      { id: 'rest-api', x: 3, y: 3, w: 1, h: 1 },
    ],
  ];

  // Tablet Layouts (3 Spalten)
  tabletLayouts: Position[][] = [
    [
      { id: 'angular', x: 0, y: 0, w: 1, h: 1 },
      { id: 'typescript', x: 1, y: 0, w: 2, h: 1 },
      { id: 'javascript', x: 0, y: 1, w: 1, h: 1 },
      { id: 'firebase', x: 1, y: 1, w: 2, h: 2 },
      { id: 'html', x: 0, y: 2, w: 1, h: 1 },
      { id: 'css', x: 0, y: 3, w: 1, h: 1 },
      { id: 'mysql', x: 1, y: 3, w: 1, h: 1 },
      { id: 'docker', x: 2, y: 3, w: 1, h: 1 },
      { id: 'git', x: 0, y: 4, w: 1, h: 1 },
      { id: 'scrum', x: 1, y: 4, w: 1, h: 1 },
      { id: 'figma', x: 2, y: 4, w: 1, h: 1 },
      { id: 'rest-api', x: 0, y: 5, w: 3, h: 1 },
    ],
    [
      { id: 'angular', x: 0, y: 0, w: 2, h: 1 },
      { id: 'typescript', x: 2, y: 0, w: 1, h: 1 },
      { id: 'javascript', x: 0, y: 1, w: 1, h: 1 },
      { id: 'firebase', x: 1, y: 1, w: 2, h: 1 },
      { id: 'html', x: 0, y: 2, w: 2, h: 1 },
      { id: 'mysql', x: 2, y: 2, w: 1, h: 2 },
      { id: 'css', x: 0, y: 3, w: 1, h: 2 },
      { id: 'figma', x: 1, y: 3, w: 1, h: 2 },
      { id: 'docker', x: 2, y: 4, w: 1, h: 1 },
      { id: 'git', x: 0, y: 5, w: 1, h: 1 },
      { id: 'scrum', x: 1, y: 5, w: 1, h: 1 },
      { id: 'rest-api', x: 2, y: 5, w: 1, h: 1 },
    ],
    [
      { id: 'angular', x: 1, y: 0, w: 1, h: 1 },
      { id: 'typescript', x: 2, y: 0, w: 1, h: 2 },
      { id: 'firebase', x: 1, y: 1, w: 1, h: 1 },
      { id: 'javascript', x: 0, y: 0, w: 1, h: 2 },
      { id: 'html', x: 1, y: 2, w: 2, h: 1 },
      { id: 'mysql', x: 2, y: 3, w: 1, h: 1 },
      { id: 'css', x: 0, y: 2, w: 1, h: 1 },
      { id: 'figma', x: 1, y: 3, w: 1, h: 1 },
      { id: 'docker', x: 1, y: 4, w: 1, h: 1 },
      { id: 'git', x: 0, y: 3, w: 1, h: 2 },
      { id: 'scrum', x: 0, y: 5, w: 2, h: 1 },
      { id: 'rest-api', x: 2, y: 4, w: 1, h: 2 },
    ],
  ];

  // Mobile Layouts (2 Spalten)
  mobileLayouts: Position[][] = [
    [
      { id: 'angular', x: 0, y: 0, w: 1, h: 1 },
      { id: 'typescript', x: 1, y: 0, w: 1, h: 1 },
      { id: 'firebase', x: 0, y: 1, w: 2, h: 1 },
      { id: 'javascript', x: 0, y: 2, w: 1, h: 1 },
      { id: 'html', x: 1, y: 2, w: 1, h: 1 },
      { id: 'css', x: 0, y: 3, w: 1, h: 1 },
      { id: 'mysql', x: 1, y: 3, w: 1, h: 1 },
      { id: 'git', x: 0, y: 4, w: 1, h: 1 },
      { id: 'docker', x: 1, y: 4, w: 1, h: 1 },
      { id: 'scrum', x: 0, y: 5, w: 1, h: 1 },
      { id: 'figma', x: 1, y: 5, w: 1, h: 1 },
      { id: 'rest-api', x: 0, y: 6, w: 2, h: 1 },
    ],
    [
      { id: 'typescript', x: 0, y: 0, w: 2, h: 1 },
      { id: 'angular', x: 0, y: 1, w: 1, h: 1 },
      { id: 'firebase', x: 1, y: 1, w: 1, h: 1 },
      { id: 'javascript', x: 0, y: 2, w: 1, h: 1 },
      { id: 'html', x: 1, y: 2, w: 1, h: 1 },
      { id: 'mysql', x: 0, y: 3, w: 2, h: 1 },
      { id: 'css', x: 0, y: 4, w: 1, h: 1 },
      { id: 'git', x: 1, y: 4, w: 1, h: 1 },
      { id: 'docker', x: 0, y: 5, w: 1, h: 1 },
      { id: 'scrum', x: 1, y: 5, w: 1, h: 1 },
      { id: 'figma', x: 0, y: 6, w: 1, h: 1 },
      { id: 'rest-api', x: 1, y: 6, w: 1, h: 1 },
    ],
  ];

  ngOnInit(): void {
    this.checkScreenSize();
    this.setupResizeListener();

    this.startRotate();
  }

  ngOnDestroy(): void {
    this.clearRotate();
  }

  private setupResizeListener(): void {
    let resizeTimeout: any;
    const resizeHandler = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const previousSize = this.screenSize;
        this.checkScreenSize();
        if (previousSize !== this.screenSize) {
          this.currentLayout = 0;
          this.cdr.detectChanges();
        }
      }, 150);
    };
    window.addEventListener('resize', resizeHandler);
  }

  checkScreenSize(): void {
    const width = window.innerWidth;
    const previousSize = this.screenSize;

    if (width <= 640) {
      this.screenSize = 'mobile';
    } else if (width <= 800) {
      this.screenSize = 'tablet';
    } else {
      this.screenSize = 'desktop';
    }

    if (previousSize !== this.screenSize) {
      this.currentLayout = 0;
    }
  }

  getGridConfig(): { cellSize: number; gap: number; columns: number } {
    switch (this.screenSize) {
      case 'mobile':
        return { cellSize: 120, gap: 12, columns: 2 };
      case 'tablet':
        return { cellSize: 145, gap: 14, columns: 3 };
      case 'desktop':
      default:
        return { cellSize: 155, gap: 15, columns: 4 };
    }
  }

  getCurrentLayouts(): Position[][] {
    switch (this.screenSize) {
      case 'mobile':
        return this.mobileLayouts;
      case 'tablet':
        return this.tabletLayouts;
      case 'desktop':
      default:
        return this.desktopLayouts;
    }
  }

  getItemStyle(skillId: string): { [key: string]: string } {
    const layouts = this.getCurrentLayouts();
    const layout = layouts[this.currentLayout % layouts.length];
    const pos = layout.find((p) => p.id === skillId);

    if (!pos) {
      return { display: 'none' };
    }

    const config = this.getGridConfig();
    const left = pos.x * (config.cellSize + config.gap);
    const top = pos.y * (config.cellSize + config.gap);
    const width = pos.w * config.cellSize + (pos.w - 1) * config.gap;
    const height = pos.h * config.cellSize + (pos.h - 1) * config.gap;

    return {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
    };
  }

  rotateLayout(): void {
    const layouts = this.getCurrentLayouts();
    this.currentLayout = (this.currentLayout + 1) % layouts.length;
  }

  startRotate() {
    this.intervalId = setInterval(() => {
      this.rotateLayout();
    }, this.secondsPerLayout * 1000);
  }

  stopRotate(): void {
    this.clearRotate();
    this.intervalId = null;
  }

  private clearRotate() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  onGridClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('bento-grid')) {
      this.rotateLayout();
    }
  }
}
