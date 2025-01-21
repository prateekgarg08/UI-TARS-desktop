import { Message } from '@ui-tars/desktop-shared/types';

export interface VlmRequest {
  conversations: Message[];
  images: string[];
}

export interface VlmResponse {
  prediction: string;
  reflections?: string[];
}

export interface VlmChatRequest {
  conversations: Message[];
  images: string[];
}

export interface VlmChatResponse {
  prediction: string;
}

export interface VlmConfig {
  model: string;
}

export abstract class VLM<
  T extends VlmRequest = VlmRequest,
  K extends VlmResponse = VlmResponse,
> {
  abstract get vlmModel(): string;
  abstract invoke({ conversations, images }: T): Promise<K>;
}