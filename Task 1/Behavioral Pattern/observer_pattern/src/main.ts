import { NewsService } from './NewsService';
import { User } from './User';

const newsService = new NewsService();

const user1 = new User('User1');
const user2 = new User('User2');

newsService.attach(user1);
newsService.attach(user2);

newsService.newMessage('Breaking News: Observer Pattern in Action!');

newsService.detach(user1);

newsService.newMessage('Update: Observer Pattern Example Complete!');
