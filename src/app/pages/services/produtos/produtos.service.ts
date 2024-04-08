import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../../interfaces/produto/produto.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private dbPath = 'product';
  productRef!: AngularFirestoreCollection<any>;

  private readonly API = 'https://script.google.com/macros/s/AKfycbz4bzrd6iGG8G9J1hTsvsjDk850Rpe97iQk9ciMk2-mTdRoENJO/exec';

  constructor(
    private http: HttpClient,
    private db: AngularFirestore
  ) {
    this.productRef = db.collection(this.dbPath);
  }

  public getProdutos(): Observable<Produto>{
    return this.http.get<Produto>(this.API);
  }

  /****************  FIREBASE  ****************/

  getAll(): AngularFirestoreCollection<any> {
    return this.productRef;
  }

  getById(id: string): AngularFirestoreDocument<any> {
    return this.db.doc<any>(`items/${id}`);
  }

  create(item: any): any {
    return this.productRef.add({ ...item });
  }

  update(id: string, data: any): Promise<void> {
    return this.productRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.productRef.doc(id).delete();
  }
    
}