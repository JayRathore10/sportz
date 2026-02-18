import { text } from "drizzle-orm/gel-core";
import { pgEnum , serial} from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const matchStatusEnum = pgEnum('match__status' , ['scheduled', 'live' , 'finished']);
