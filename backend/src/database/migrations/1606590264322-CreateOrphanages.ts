import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateOrphanages1606590264322 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'about',
            type: 'varchar',
          },
          {
            name: 'instructions',
            type: 'varchar',
          },
          {
            name: 'open',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }
}
