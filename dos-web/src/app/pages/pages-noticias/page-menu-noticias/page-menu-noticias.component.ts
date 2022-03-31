import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-menu-noticias',
  templateUrl: './page-menu-noticias.component.html',
  styleUrls: ['./page-menu-noticias.component.css']
})

export class PageMenuNoticiasComponent {

  pages: number = 1;
  noticias: noticia[] = [  
    {id:1,ruta:'/pages/diabetes',descripcion:'Días y horarios'},  
    {id:2,ruta:'/pages/ezeiza',descripcion:'Ezeiza'},  
    {id:3,ruta:'/pages/convenio',descripcion:'Convenio con Federación Odontológica'},  
    {id:4,ruta:'/pages/covid',descripcion:'Preguntas frecuentas'},  
    {id:5,ruta:'/pages/psicologo',descripcion:'Desde el 6 de Enero'},  
    {id:6,ruta:'/pages/psiquiatra',descripcion:'Desde el 27 de diciembre'},  
    {id:7,ruta:'/pages/diaMedico',descripcion:'3 de Diciembre Día del Médico'},  
    {id:8,ruta:'pages/vih',descripcion:'1 de diciembre'},  
    {id:9,ruta:'/pages/sanatorio',descripcion:'Ituzaingó y Merlo'},  
    {id:10,ruta:'/pages/preQuirurgico',descripcion:'En un solo día'},  
    {id:11,ruta:'/pages/jornada',descripcion:'19 de Noviembre Complejo Penitenciario Federal I'},  
    {id:12,ruta:'/pages/jornadaDo',descripcion:'15 de Noviembre Subsede Ezeiza'},  
    {id:13,ruta:'/pages/cronica',descripcion:'Vigente a partir del 1/11/2021'},  
    {id:14,ruta:'/pages/odontologiaSur',descripcion:'Licencia Dra. Silvina Baldracco'},  
    {id:15,ruta:'/pages/jardinMaternal',descripcion:'Jardín maternal y de infantes'},  
    {id:16,ruta:'/pages/comunicado',descripcion:'Comunicado'},  
    {id:17,ruta:'/pages/sepelio',descripcion:'Cobertura de Sepelio'},  
    {id:18,ruta:'/pages/prestadorSur',descripcion:'Nuevo Prestador Zona Su'},  
    {id:19,ruta:'/pages/especialidades',descripcion:'Nuevas especialidades en Subsede Ezeiza'},  
    {id:20,ruta:'/pages/turnosOdontologia',descripcion:'Regularización de turnos y prestaciones del Servicio de Odontología'},  
    {id:21,ruta:'/pages/prestadorSurFia',descripcion:'Nuevo Prestador Zona Sur'},  
    {id:22,ruta:'/pages/turnosOnline',descripcion:'Instructivo'},  
    {id:23,ruta:'/pages/atencion',descripcion:'Atención odontológica'},  
    {id:24,ruta:'/pages/canalesDeConsulta',descripcion:'Nuevos canales de consulta con el área de Servicio Social'},  
    {id:25,ruta:'/pages/vademecum',descripcion:'ademécum para pacientes oncológicos y plan B24'},  
    {id:26,ruta:'/pages/femeba',descripcion:'Contratación de FEMEBA'},  
    {id:27,ruta:'/pages/centraLab',descripcion:'aboratorio CentraLab sucursales'}
  ];
}

  // constructor() { }

  // ngOnInit() {
  // }




class noticia {  
  id : number;  
  ruta : string;  
  descripcion : string;  
}  


