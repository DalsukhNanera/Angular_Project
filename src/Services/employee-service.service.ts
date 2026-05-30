import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EMployeeServiceService {

  constructor(private client: HttpClient ) {


   }

 

   ShowEmployee():Observable<any>{

      const headers = new HttpHeaders({
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRGFsc3VraCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Ik9wdGltdW1AMTIzIiwianRpIjoiZWVjYzFhMGEtNDIxZC00Mzk4LWEzMjgtZjUwYmE3Y2JkOWNiIiwiZXhwIjoxNzc5OTk2NzczLCJpc3MiOiJNeUFwaSIsImF1ZCI6Ik15QXBpVXNlcnMifQ.kZ0AI0Lcy7vEuFNi3amVsmA29sC4g9Ybgs-Yr-l6Abo`
    });

    return this.client.get("http://localhost:5150/api/EmployeeOperation", { headers: headers });
   }

}
