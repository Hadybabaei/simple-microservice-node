import { DataSource } from 'typeorm';
import ormconfigs from './ormconfig';

const appDataSource = new DataSource(ormconfigs)

export default appDataSource;