import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AssetsUtils, Image } from '@org/shared';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {

  protected logoPath = AssetsUtils.getImageUrl(Image.LOGO, 'svg');
  protected avatarPath = AssetsUtils.getImageUrl(Image.AVATAR, 'jpg');

  toggleTheme(): void {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');

    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }
}
