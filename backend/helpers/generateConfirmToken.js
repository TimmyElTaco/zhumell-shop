import { v4 as uuidv4 } from 'uuid';

export default function generateConfirmToken() {
    const token = uuidv4();

    return token;
}