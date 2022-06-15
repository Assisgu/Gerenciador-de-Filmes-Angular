import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/model/filme';
import { FilmeService } from 'src/app/service/filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  filmes = new Array<Filme>()
  filme?: Filme;
  editando = false;
  colunas = ['nome', 'ano', 'genero', 'nota', 'status', 'acoes'];


  constructor(private FilmeService: FilmeService) { }


  ngOnInit(): void {
    this.listar();
  }

  listar() {
    //retorna um observable
    this.FilmeService.listar().subscribe(filmes => {
      this.filmes = filmes;
    });
  }

  novo() {
    this.filme = new Filme();
    this.editando = false;
  }

  salvar() {
    if (this.filme) {
      if(!this.editando){
        this.FilmeService.inserir(this.filme).subscribe(filme => {
          this.listar();
          this.filme = undefined;
        });
      }
      else{
        this.FilmeService.atualizar(this.filme).subscribe(filme => {
          this.listar();
          this.filme = undefined; //para sumir form
        })
      }
    }
  }

  excluir(id: number) {
    this.FilmeService.remover(id).subscribe(() => {
      this.listar();
    });
  }

  editar(filme: Filme) {
    this.filme = filme;
    this.editando = true;
  }

}
