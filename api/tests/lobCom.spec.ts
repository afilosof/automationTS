import { expect } from 'chai';
import * as superagent from 'superagent';
import { KEY, BASE_URL } from '../utils/constants';
import { errorHandler, getRandomString } from '../utils/helper';
import { Basic } from 'superagent-authorization';

let response: any;
let addressId: string;
const randomAddressId = getRandomString(10);

const address = {
  name: 'Anna Filosof',
  address_line1: '210 King St',
  address_city: 'San Francisco',
  address_state: 'CA',
  address_zip: '94107',
};
const { name, address_line1, address_city, address_state, address_zip } = address;

describe('Lob.com API tests', () => {
  it('Create a new address given information', async () => {
    try {
      response = await superagent.post(`${BASE_URL}/v1/addresses`).use(Basic(KEY)).send({ name, address_line1, address_city, address_state, address_zip });
    } catch (err: any) {
      errorHandler(err);
    }
    addressId = response.body.id;
    expect(response.status, 'Status code is 200').to.eq(200);
  });
  it('Retrieve the details of an existing address', async () => {
    try {
      response = await superagent.get(`${BASE_URL}/v1/addresses/${addressId}`).use(Basic(KEY));
    } catch (err: any) {
      errorHandler(err);
    }
    expect(response.status, 'Status code is 200').to.eq(200);
  });
  it('Delete the details of an existing address', async () => {
    try {
      response = await superagent.delete(`${BASE_URL}/v1/addresses/${addressId}`).use(Basic(KEY));
    } catch (err: any) {
      errorHandler(err);
    }
    expect(response.status, 'Status code is 200').to.eq(200);
    expect(response.body.deleted, 'Check deleted flag').to.be.true;
  });
  it('Return a list of all addresses', async () => {
    try {
      response = await superagent.get(`${BASE_URL}/v1/addresses`).use(Basic(KEY));
    } catch (err: any) {
      errorHandler(err);
    }
    expect(response.status, 'Status code is 200').to.eq(200);
  });

  it("Create a new address without the 'name' parameter", async () => {
    try {
      response = await superagent.post(`${BASE_URL}/v1/addresses`).use(Basic(KEY)).send({ address_line1, address_city, address_state, address_zip });
    } catch (err: any) {
      expect(err.status, 'Status code is 422').to.eq(422);
      expect(JSON.parse(err.response.text).error.message, 'Check validation error message').to.eql('name or company is required');
    }
  });
  it("Create a new address without the 'address_line1' parameter", async () => {
    try {
      response = await superagent.post(`${BASE_URL}/v1/addresses`).use(Basic(KEY)).send({ name, address_city, address_state, address_zip });
    } catch (err: any) {
      expect(err.status, 'Status code is 422').to.eq(422);
      expect(JSON.parse(err.response.text).error.message, 'Check validation error message').to.eql('address_line1 is required');
    }
  });
  it('Retrieve the details of an unexisting address', async () => {
    try {
      response = await superagent.get(`${BASE_URL}/v1/addresses/${randomAddressId}`).use(Basic(KEY));
    } catch (err: any) {
      expect(err.status, 'Status code is 404').to.eq(404);
      expect(JSON.parse(err.response.text).error.message, 'Check validation error message').to.eql('address not found');
    }
  });
});
