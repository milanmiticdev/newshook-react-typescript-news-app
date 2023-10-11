import type { ArticleType } from './types.ts';

export interface ArticleCardProps {
	article: ArticleType;
}

export interface DisplayProps {
	section: string;
}

export interface MainProps {
	children: React.ReactNode;
}

export interface MessageProps {
	message: string;
}

export interface SectionDayProps {
	children: React.ReactNode;
	date: string;
}
