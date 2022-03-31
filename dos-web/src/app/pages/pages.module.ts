import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { PageInstitucionalComponent } from './page-institucional/page-institucional/page-institucional.component';
import { PageSedesComponent } from './page-sedes/page-sedes/page-sedes.component';
import { PageBeneficiosSocialesComponent } from './pages-beneficios-sociales/page-beneficios-sociales/page-beneficios-sociales.component';
import { PageCeliaquiaComponent } from './pages-beneficios-sociales/page-celiaquia/page-celiaquia/page-celiaquia.component';
import { PageDiscapacidadComponent } from './pages-beneficios-sociales/page-discapacidad/page-discapacidad/page-discapacidad.component';
import { PageGeriatriaComponent } from './pages-beneficios-sociales/page-geriatria/page-geriatria/page-geriatria.component';
import { PageJardinComponent } from './pages-beneficios-sociales/page-jardin/page-jardin/page-jardin.component';
import { PageSaludMentalComponent } from './pages-salud-mental/page-salud-mental/page-salud-mental.component';
import { PageAdolescentesComponent } from './pages-salud-mental/page-adolescentes/page-adolescentes/page-adolescentes.component';
import { PageCanalesConsultaComponent } from './pages-salud-mental/page-canales-consulta/page-canales-consulta/page-canales-consulta.component';
import { PageSosComponent } from './pages-salud-mental/page-sos/page-sos/page-sos.component';
import { PageViolenciaComponent } from './pages-salud-mental/page-violencia/page-violencia/page-violencia.component';
// import { PageTramitesComponent } from './pages-tramites/page-tramites/page-tramites.component';
//import { PageAfiliacionesComponent } from './page-tramites-padre/page-afiliaciones/page-afiliaciones/page-afiliaciones.component';
//import { PageSolicitudesComponent } from './page-tramites-padre/page-solicitudes/page-solicitudes/page-solicitudes.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PageNoticiasComponent } from './pages-noticias/page-noticias/page-noticias.component';
import { PageMenuNoticiasComponent } from './pages-noticias/page-menu-noticias/page-menu-noticias.component';
import { PageNoticiaDiabetesComponent } from './pages-noticias/page-noticia-diabetes/page-noticia-diabetes.component';
import { PageNoticiaEzeizaComponent } from './pages-noticias/page-noticia-ezeiza/page-noticia-ezeiza.component';
import { PageNoticiaConvenioComponent } from './pages-noticias/page-noticia-convenio/page-noticia-convenio.component';
import { PageNoticiaCovidComponent } from './pages-noticias/page-noticia-covid/page-noticia-covid.component';
import { PageNoticiaPsicologoComponent } from './pages-noticias/page-noticia-psicologo/page-noticia-psicologo.component';
import { PageNoticiaPsiquiatraComponent } from './pages-noticias/page-noticia-psiquiatra/page-noticia-psiquiatra.component';
import { PageNoticiaDiaMedicoComponent } from './pages-noticias/page-noticia-dia-medico/page-noticia-dia-medico.component';
import { PageNoticiaDiaVihComponent } from './pages-noticias/page-noticia-dia-vih/page-noticia-dia-vih.component';
import { PageNoticiaSanatorioOesteComponent } from './pages-noticias/page-noticia-sanatorio-oeste/page-noticia-sanatorio-oeste.component';
import { PageNoticiaPreQuirurgicoComponent } from './pages-noticias/page-noticia-pre-quirurgico/page-noticia-pre-quirurgico.component';
import { PageNoticiaJornadaDiabetesComponent } from './pages-noticias/page-noticia-jornada-diabetes/page-noticia-jornada-diabetes.component';
import { PageNoticiaJornadaDiabetesDosComponent } from './pages-noticias/page-noticia-jornada-diabetes-dos/page-noticia-jornada-diabetes-dos.component';
import { PageNoticiaMedicacionCronicaComponent } from './pages-noticias/page-noticia-medicacion-cronica/page-noticia-medicacion-cronica.component';
import { PageNoticiaOdontologiaSurComponent } from './pages-noticias/page-noticia-odontologia-sur/page-noticia-odontologia-sur.component';
import { PageNoticiaJardinMaternalComponent } from './pages-noticias/page-noticia-jardin-maternal/page-noticia-jardin-maternal.component';
import { PageNoticiaComunicadoComponent } from './pages-noticias/page-noticia-comunicado/page-noticia-comunicado.component';
import { PageNoticiaSepelioComponent } from './pages-noticias/page-noticia-sepelio/page-noticia-sepelio.component';
import { PageNoticiaPrestadorSurComponent } from './pages-noticias/page-noticia-prestador-sur/page-noticia-prestador-sur.component';
import { PageNoticiaEspecialidadesEzeizaComponent } from './pages-noticias/page-noticia-especialidades-ezeiza/page-noticia-especialidades-ezeiza.component';
import { PageNoticiaTurnosOdontologiaComponent } from './pages-noticias/page-noticia-turnos-odontologia/page-noticia-turnos-odontologia.component';
import { PageNoticiaPrestadorSurFiaComponent } from './pages-noticias/page-noticia-prestador-sur-fia/page-noticia-prestador-sur-fia.component';
import { PageNoticiaTurnosOnlineComponent } from './pages-noticias/page-noticia-turnos-online/page-noticia-turnos-online.component';
import { PageNoticiaAtencionOdontologicaComponent } from './pages-noticias/page-noticia-atencion-odontologica/page-noticia-atencion-odontologica.component';
import { PageNoticiaCanalesConsultaComponent } from './pages-noticias/page-noticia-canales-consulta/page-noticia-canales-consulta.component';
import { PageNoticiaVademecumComponent } from './pages-noticias/page-noticia-vademecum/page-noticia-vademecum.component';
import { PageNoticiaFemebaComponent } from './pages-noticias/page-noticia-femeba/page-noticia-femeba.component';
import { PageNoticiaCentralabComponent } from './pages-noticias/page-noticia-centralab/page-noticia-centralab.component';
import { ComponentsModule } from '../components/components.module';
import { PageCartillaComponent } from './page-cartilla/page-cartilla/page-cartilla.component';
import { PageFarmaciasComponent } from './page-farmacias/page-farmacias/page-farmacias.component';
import { PageLaboratoriosComponent } from './page-laboratorios/page-laboratorios/page-laboratorios.component';
import { PageTurnosComponent } from './page-turnos/page-turnos/page-turnos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageTramitesPadreModule } from './page-tramites-padre/page-tramites-padre.module';





@NgModule({
  declarations: [
      PageInstitucionalComponent,
      PageSedesComponent,
      PageBeneficiosSocialesComponent,
      PageCeliaquiaComponent,
      PageDiscapacidadComponent,
      PageGeriatriaComponent,
      PageJardinComponent,
      PageSaludMentalComponent,
      PageAdolescentesComponent,
      PageCanalesConsultaComponent,
      PageSosComponent,
      PageViolenciaComponent,
      // PageTramitesComponent,
      // PageAfiliacionesComponent,
 
      // PageSolicitudesComponent,
   
      PageNoticiasComponent,
      PageMenuNoticiasComponent,
      PageNoticiaDiabetesComponent,
      PageNoticiaEzeizaComponent,
      PageNoticiaConvenioComponent,
      PageNoticiaCovidComponent,
      PageNoticiaPsicologoComponent,
      PageNoticiaPsiquiatraComponent,
      PageNoticiaDiaMedicoComponent,
      PageNoticiaDiaVihComponent,
      PageNoticiaSanatorioOesteComponent,
      PageNoticiaPreQuirurgicoComponent,
      PageNoticiaJornadaDiabetesComponent,
      PageNoticiaJornadaDiabetesDosComponent,
      PageNoticiaMedicacionCronicaComponent,
      PageNoticiaOdontologiaSurComponent,
      PageNoticiaJardinMaternalComponent,
      PageNoticiaComunicadoComponent,
      PageNoticiaSepelioComponent,
      PageNoticiaPrestadorSurComponent,
      PageNoticiaEspecialidadesEzeizaComponent,
      PageNoticiaTurnosOdontologiaComponent,
      PageNoticiaPrestadorSurFiaComponent,
      PageNoticiaTurnosOnlineComponent,
      PageNoticiaAtencionOdontologicaComponent,
      PageNoticiaCanalesConsultaComponent,
      PageNoticiaVademecumComponent,
      PageNoticiaFemebaComponent,
      PageNoticiaCentralabComponent,
      PageCartillaComponent,
      PageFarmaciasComponent,
      PageLaboratoriosComponent,
      PageTurnosComponent,      
  
  ],
  imports: [
    CommonModule,   
    PagesRoutingModule,   
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgxPaginationModule,
    PageTramitesPadreModule

  ],

  exports:[
    PageMenuNoticiasComponent
  ]
})
export class PagesModule {

}