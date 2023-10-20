import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration16976269254171697629423227
  implements MigrationInterface
{
  name = 'InitialMigration16976269254171697629423227';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`category_shipping\` (\`id\` int NOT NULL AUTO_INCREMENT, \`acronym\` enum ('MAXLIGHT', 'LIGHT', 'STANDARD', 'HEAVY', 'LARGE_VOLUMEN') NOT NULL, \`description\` varchar(255) NOT NULL, \`minWeight\` int NOT NULL, \`maxWeight\` int NOT NULL, UNIQUE INDEX \`IDX_de9e5185b0cc51d744f514fc08\` (\`acronym\`), UNIQUE INDEX \`IDX_6180dc96e746884dad801d4de7\` (\`description\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`shipping\` (\`id\` int NOT NULL AUTO_INCREMENT, \`destinationAddress\` varchar(255) NOT NULL, \`postalCode\` char(5) NOT NULL, \`destinationName\` varchar(255) NOT NULL, \`senderName\` varchar(255) NOT NULL, \`weight\` varchar(255) NOT NULL, \`totalPrice\` int NOT NULL DEFAULT '0', \`categoryId\` int NULL, \`transporterId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`transporter\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, UNIQUE INDEX \`IDX_dfb784b61a334c8091b2aea513\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`transporter_to_province\` (\`id\` int NOT NULL AUTO_INCREMENT, \`transporterId\` int NOT NULL, \`provinceId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`province\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_4f461cb46f57e806516b707365\` (\`id\`), UNIQUE INDEX \`IDX_aa290c4049a8aa685a81483389\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`shipping\` ADD CONSTRAINT \`FK_a1404956cf566d4c360df63030b\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category_shipping\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`shipping\` ADD CONSTRAINT \`FK_22ed58216534630f7205e749052\` FOREIGN KEY (\`transporterId\`) REFERENCES \`transporter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`transporter_to_province\` ADD CONSTRAINT \`FK_a47ad47384d3a7fd22927640d63\` FOREIGN KEY (\`transporterId\`) REFERENCES \`transporter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`transporter_to_province\` ADD CONSTRAINT \`FK_787c99c336f6e3b1578334537a3\` FOREIGN KEY (\`provinceId\`) REFERENCES \`province\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`transporter_to_province\` DROP FOREIGN KEY \`FK_787c99c336f6e3b1578334537a3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`transporter_to_province\` DROP FOREIGN KEY \`FK_a47ad47384d3a7fd22927640d63\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`shipping\` DROP FOREIGN KEY \`FK_22ed58216534630f7205e749052\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`shipping\` DROP FOREIGN KEY \`FK_a1404956cf566d4c360df63030b\``,
    );
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_aa290c4049a8aa685a81483389\` ON \`province\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_4f461cb46f57e806516b707365\` ON \`province\``,
    );
    await queryRunner.query(`DROP TABLE \`province\``);
    await queryRunner.query(`DROP TABLE \`transporter_to_province\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_dfb784b61a334c8091b2aea513\` ON \`transporter\``,
    );
    await queryRunner.query(`DROP TABLE \`transporter\``);
    await queryRunner.query(`DROP TABLE \`shipping\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_6180dc96e746884dad801d4de7\` ON \`category_shipping\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_de9e5185b0cc51d744f514fc08\` ON \`category_shipping\``,
    );
    await queryRunner.query(`DROP TABLE \`category_shipping\``);
  }
}
