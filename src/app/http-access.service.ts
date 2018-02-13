import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpAccessService {

  constructor(private http:HttpClient) { }
  doGET() {
    console.log("GET in service");
    let url = `/assets/cacheEntry.json`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    // this.http.get(url).subscribe(res => console.log(res);/* , { search: search } */
    return this.http.get(url)
    .map(res => {
      return res['oneOf'].map(item => {
        return  new Test(
            item.type,
            item.optional,
            item.required,
            item.properties,
        );
      });
    });
  }
}

export class Test {
  value1;
  value2;
  value3;
  value4;
  value5;
  constructor(v1,v2,v3,v4,v5?) {
    this.value1 =v1;
    this.value2 =v2;
    this.value3 =v3;
    this.value4 =v4;
    this.value5 =v5;
  }
}
