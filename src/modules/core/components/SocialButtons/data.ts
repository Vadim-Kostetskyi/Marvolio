import Linkedin from "assets/svg/Linkedin";
import LinkedinWhite from "assets/svg/LinkedinWhite";
import Telegram from "assets/svg/Telegram";
import TelegramWhite from "assets/svg/TelegramWhite";
import Github from "assets/svg/Github";
import GithubWhite from "assets/svg/GithubWhite";
import { socialLinks } from "helpers/socialLinks";

export const socialIconsBlack = [
  {
    socialLink: Telegram,
    link: socialLinks.Telegram,
  },
  {
    socialLink: Github,
    link: socialLinks.GitHub,
  },
  {
    socialLink: Linkedin,
    link: socialLinks.Linkedin,
  },
];

export const socialIconsWhite = [
  {
    SocialLink: LinkedinWhite,
    link: socialLinks.Linkedin,
  },
  {
    SocialLink: GithubWhite,
    link: socialLinks.GitHub,
  },
  {
    SocialLink: TelegramWhite,
    link: socialLinks.Telegram,
  },
];
