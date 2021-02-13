import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });
  it('reversed the string', () => {  
    const pipe = new ReversePipe(); 
    const value = pipe.transform("olleh 321") 
    expect(value).toMatch("123 hello");
  });
});
