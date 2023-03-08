import {Client,Account, Databases} from "appwrite"

const client = new Client()
client.setEndpoint("http://localhost").setProject("64082aeaaea483e2910c")

export const account = new Account(client)

export const databases = new Databases(client,"64082af30970ca59d854")