describe("visitor form testing", () => {
    const fixture = require('./fixture');
    const axios = require('axios');

    it('should return form html format', async(done)=>{
        try {
            const results = await axios.get('http://localhost:3009/single-page-app');
            expect(results.data).toEqual(fixture)
        } catch (err) {
            console.log(err)
        }

        done()

    })

    it('delete visitor', async(done) => {
        try{
            const dlt = await axios.get('http://localhost:3009/deleteVisitor:id');
            expect(dlt.data).toEqual(fixture)
        } catch(err) {
            console.log(err)
        }

        done()
    })
});