import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('url_encurtada')
export default class ShortenerUrl {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', name: 'url', length: 60 })
    url: String;

    @Column({ type: 'varchar', name: 'url_curta', length: 60 })
    shortUrl: String

    @Column({ type: 'date', name: 'dt_validate' })
    expirationDate: Date
}
