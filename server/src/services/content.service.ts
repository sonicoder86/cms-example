import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ContentEntity } from '../db/entities/content.entity';

@Injectable()
export class ContentService {
  constructor(private dataSource: DataSource) {}

  getContents(): Promise<ContentEntity[]> {
    return this.dataSource.getRepository(ContentEntity).find();
  }
}
