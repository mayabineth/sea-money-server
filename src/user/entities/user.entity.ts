export class UserEntity {
  id: string;
  name: string;
  age: number;
  defaultCurrency: string;
  connections: string[];
  messages: MessageType[];
}

export interface MessageType {
  id: string;
  title: string;
  content: string;
}
