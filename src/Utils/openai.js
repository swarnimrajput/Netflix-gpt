import OpenAI from 'openai';
import {API_key}from './Constants';

const openai = new OpenAI({
    apiKey:API_key,
   dangerouslyAllowBrowser:true, 
  });
export default openai;