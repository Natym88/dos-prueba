import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PageCartillaComponent } from './page-cartilla/page-cartilla/page-cartilla.component';
import { PageFarmaciasComponent } from './page-farmacias/page-farmacias/page-farmacias.component';
import { PageInstitucionalComponent } from './page-institucional/page-institucional/page-institucional.component';
import { PageLaboratoriosComponent } from './page-laboratorios/page-laboratorios/page-laboratorios.component';
import { PageSedesComponent } from './page-sedes/page-sedes/page-sedes.component';
import { PageTurnosComponent } from './page-turnos/page-turnos/page-turnos.component';
import { PageBeneficiosSocialesComponent } from './pages-beneficios-sociales/page-beneficios-sociales/page-beneficios-sociales.component';
import { PageCeliaquiaComponent } from './pages-beneficios-sociales/page-celiaquia/page-celiaquia/page-celiaquia.component';
import { PageDiscapacidadComponent } from './pages-beneficios-sociales/page-discapacidad/page-discapacidad/page-discapacidad.component';
import { PageGeriatriaComponent } from './pages-beneficios-sociales/page-geriatria/page-geriatria/page-geriatria.component';
import { PageJardinComponent } from './pages-beneficios-sociales/page-jardin/page-jardin/page-jardin.component';
import { PageNoticiaAtencionOdontologicaComponent } from './pages-noticias/page-noticia-atencion-odontologica/page-noticia-atencion-odontologica.component';
import { PageNoticiaCanalesConsultaComponent } from './pages-noticias/page-noticia-canales-consulta/page-noticia-canales-consulta.component';
import { PageNoticiaCentralabComponent } from './pages-noticias/page-noticia-centralab/page-noticia-centralab.component';
import { PageNoticiaComunicadoComponent } from './pages-noticias/page-noticia-comunicado/page-noticia-comunicado.component';
import { PageNoticiaConvenioComponent } from './pages-noticias/page-noticia-convenio/page-noticia-convenio.component';
import { PageNoticiaCovidComponent } from './pages-noticias/page-noticia-covid/page-noticia-covid.component';
import { PageNoticiaDiaMedicoComponent } from './pages-noticias/page-noticia-dia-medico/page-noticia-dia-medico.component';
import { PageNoticiaDiaVihComponent } from './pages-noticias/page-noticia-dia-vih/page-noticia-dia-vih.component';
import { PageNoticiaDiabetesComponent } from './pages-noticias/page-noticia-diabetes/page-noticia-diabetes.component';
import { PageNoticiaEspecialidadesEzeizaComponent } from './pages-noticias/page-noticia-especialidades-ezeiza/page-noticia-especialidades-ezeiza.component';
import { PageNoticiaEzeizaComponent } from './pages-noticias/page-noticia-ezeiza/page-noticia-ezeiza.component';
import { PageNoticiaFemebaComponent } from './pages-noticias/page-noticia-femeba/page-noticia-femeba.component';
import { PageNoticiaJardinMaternalComponent } from './pages-noticias/page-noticia-jardin-maternal/page-noticia-jardin-maternal.component';
import { PageNoticiaJornadaDiabetesDosComponent } from './pages-noticias/page-noticia-jornada-diabetes-dos/page-noticia-jornada-diabetes-dos.component';
import { PageNoticiaJornadaDiabetesComponent } from './pages-noticias/page-noticia-jornada-diabetes/page-noticia-jornada-diabetes.component';
import { PageNoticiaMedicacionCronicaComponent } from './pages-noticias/page-noticia-medicacion-cronica/page-noticia-medicacion-cronica.component';
import { PageNoticiaOdontologiaSurComponent } from './pages-noticias/page-noticia-odontologia-sur/page-noticia-odontologia-sur.component';
import { PageNoticiaPreQuirurgicoComponent } from './pages-noticias/page-noticia-pre-quirurgico/page-noticia-pre-quirurgico.component';
import { PageNoticiaPrestadorSurFiaComponent } from './pages-noticias/page-noticia-prestador-sur-fia/page-noticia-prestador-sur-fia.component';
import { PageNoticiaPrestadorSurComponent } from './pages-noticias/page-noticia-prestador-sur/page-noticia-prestador-sur.component';
import { PageNoticiaPsicologoComponent } from './pages-noticias/page-noticia-psicologo/page-noticia-psicologo.component';
import { PageNoticiaPsiquiatraComponent } from './pages-noticias/page-noticia-psiquiatra/page-noticia-psiquiatra.component';
import { PageNoticiaSanatorioOesteComponent } from './pages-noticias/page-noticia-sanatorio-oeste/page-noticia-sanatorio-oeste.component';
import { PageNoticiaSepelioComponent } from './pages-noticias/page-noticia-sepelio/page-noticia-sepelio.component';
import { PageNoticiaTurnosOdontologiaComponent } from './pages-noticias/page-noticia-turnos-odontologia/page-noticia-turnos-odontologia.component';
import { PageNoticiaTurnosOnlineComponent } from './pages-noticias/page-noticia-turnos-online/page-noticia-turnos-online.component';
import { PageNoticiaVademecumComponent } from './pages-noticias/page-noticia-vademecum/page-noticia-vademecum.component';
import { PageNoticiasComponent } from './pages-noticias/page-noticias/page-noticias.component';
import { PageAdolescentesComponent } from './pages-salud-mental/page-adolescentes/page-adolescentes/page-adolescentes.component';
import { PageCanalesConsultaComponent } from './pages-salud-mental/page-canales-consulta/page-canales-consulta/page-canales-consulta.component';
import { PageSaludMentalComponent } from './pages-salud-mental/page-salud-mental/page-salud-mental.component';
import { PageSosComponent } from './pages-salud-mental/page-sos/page-sos/page-sos.component';
import { PageViolenciaComponent } from './pages-salud-mental/page-violencia/page-violencia/page-violencia.component';
import { PageAfiliacionesComponent } from './page-tramites-padre/page-afiliaciones/page-afiliaciones/page-afiliaciones.component';
import { PageSolicitudesComponent } from './page-tramites-padre/page-solicitudes/page-solicitudes/page-solicitudes.component';




const appRoutes: Routes = [
 {
    path: 'institucional',
   component: PageInstitucionalComponent
 },

 {
    path: 'pageSedes',
   component: PageSedesComponent
 },
 {
    path: 'beneficiosSociales',
   component: PageBeneficiosSocialesComponent
 },

 {
    path: 'celiaquia',
   component: PageCeliaquiaComponent
 },

 {
    path: 'discapacidad',
   component: PageDiscapacidadComponent
 },

 {
    path: 'geriatria',
   component: PageGeriatriaComponent
 },

 {
    path: 'jardin',
   component: PageJardinComponent
 },

 {
    path: 'saludMental',
    component: PageSaludMentalComponent
 },

 {
    path: 'adolescentes',
    component: PageAdolescentesComponent
 },

 {
    path: 'canalesConsulta',
    component: PageCanalesConsultaComponent
 },

 {
    path: 'sos',
    component: PageSosComponent
 },

 {
    path: 'violencia',
    component: PageViolenciaComponent
 },

//  {
//     path: 'tramitesMenu',
//     component: PageTramitesComponent
//  },

//  {
//     path: 'afiliaciones',
//     component: PageAfiliacionesComponent
//  },





 {
    path: 'solicitudes',
    component: PageSolicitudesComponent
 },


 {
    path: 'noticias',
    component: PageNoticiasComponent
 },

 {
   path: 'diabetes',
   component: PageNoticiaDiabetesComponent
 },

 {
   path: 'atencion',
   component: PageNoticiaAtencionOdontologicaComponent
 },

 {
    path:'canalesDeConsulta',
    component: PageNoticiaCanalesConsultaComponent
 },

 {
    path: 'centraLab',
    component: PageNoticiaCentralabComponent
 },

 {
    path: 'comunicado',
    component: PageNoticiaComunicadoComponent
 },

 {
    path: 'convenio',
    component: PageNoticiaConvenioComponent
 },

 {
    path: 'covid',
    component: PageNoticiaCovidComponent
 },

 {
    path: 'diaMedico',
    component: PageNoticiaDiaMedicoComponent
 },

 {
    path: 'vih',
    component: PageNoticiaDiaVihComponent
 },

 {
    path: 'especialidades',
    component: PageNoticiaEspecialidadesEzeizaComponent
 },

 {
    path: 'ezeiza',
    component: PageNoticiaEzeizaComponent
 },

 {
    path: 'femeba',
    component: PageNoticiaFemebaComponent
 },

 {
    path: 'jardinMaternal',
    component: PageNoticiaJardinMaternalComponent
 },

 {
    path: 'jornada',
    component: PageNoticiaJornadaDiabetesComponent
 },

 {
    path: 'jornadaDos',
    component: PageNoticiaJornadaDiabetesDosComponent
 },

 {
    path: 'cronica',
    component: PageNoticiaMedicacionCronicaComponent
 },

 {
    path: 'odontologiaSur',
    component: PageNoticiaOdontologiaSurComponent
 },

 {
    path: 'preQuirurgico',
    component: PageNoticiaPreQuirurgicoComponent
 },

 {
    path: 'prestadorSur',
    component: PageNoticiaPrestadorSurComponent
 },

 {
   path: 'prestadorSurFia',
   component: PageNoticiaPrestadorSurFiaComponent
},

{
   path: 'psicologo',
   component: PageNoticiaPsicologoComponent
},

{
   path: 'psiquiatra',
   component: PageNoticiaPsiquiatraComponent
},

{
   path: 'sanatorio',
   component: PageNoticiaSanatorioOesteComponent
},

{
   path: 'sepelio',
   component: PageNoticiaSepelioComponent
},

{
   path: 'turnosOdontologia',
   component: PageNoticiaTurnosOdontologiaComponent
},

{
   path: 'turnosOnline',
   component: PageNoticiaTurnosOnlineComponent
},

{
   path: 'vademecum',
   component: PageNoticiaVademecumComponent
},

{
   path: 'pageCartilla',
   component: PageCartillaComponent
},

{
   path: 'pageTurnos',
   component: PageTurnosComponent
},

{
   path: 'pageFarmacias',
   component: PageFarmaciasComponent
},

{
   path: 'pageLaboratorios',
   component: PageLaboratoriosComponent
},
{ path: 'tramites', 
      loadChildren: () => import('./page-tramites-padre/page-tramites-padre.module').then(m => m.PageTramitesPadreModule), },
     
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {
}