import { Database } from 'better-sqlite3';
import { Logger } from 'drizzle-orm';
import { SQLiteDialect } from '~/dialect';
import { BetterSQLiteSession } from './session';

export interface SQLiteDriverOptions {
	logger?: Logger;
}

export class SQLiteDriver {
	private session!: BetterSQLiteSession;

	constructor(
		private client: Database,
		private dialect: SQLiteDialect,
		private options: SQLiteDriverOptions = {},
	) {}

	connect(): BetterSQLiteSession {
		this.session = new BetterSQLiteSession(this.client, this.dialect, { logger: this.options.logger });
		return this.session;
	}
}