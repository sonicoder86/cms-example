import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Content } from '../db/entities/content.entity';

@Injectable()
export class ContentService {
  constructor(private dataSource: DataSource) {}

  getContents(): Promise<Content[]> {
    return this.dataSource.getRepository(Content).find();
  }
}
