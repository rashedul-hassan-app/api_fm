import * as user from '../user'

describe('user handlrers', () => {
    it('should create new user and return token', async () => {
        const req = { body: { username: 'hello', password: 'world' } };
        const res = { json({token}) {
            expect(token).toBeTruthy()
        } };
        await user.createNewUser(req, res, ()=>{});
    });
 });