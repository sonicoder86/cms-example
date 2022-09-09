import { MigrationInterface, QueryRunner } from 'typeorm';

export class sessionMigration1662399936040 implements MigrationInterface {
  name = 'sessionMigration1662399936040';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`session\` (\`id\` int NOT NULL AUTO_INCREMENT, \`token\` varchar(255) NOT NULL, \`user_id\` int NOT NULL, \`created\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`session\``);
  }
}
