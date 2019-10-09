import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Server Listo');
  }

  getNewRelease() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCPJzc-I25V1yWYVVwtfF7Ws-FO4zWVZZ-M7BlCsFBxPjlnJuh28hca4GUcCkFB1z9BlnRDOGR4X6qd14k'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

  }

  getArtist(term:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCPJzc-I25V1yWYVVwtfF7Ws-FO4zWVZZ-M7BlCsFBxPjlnJuh28hca4GUcCkFB1z9BlnRDOGR4X6qd14k'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=20`, { headers });
  }

}
