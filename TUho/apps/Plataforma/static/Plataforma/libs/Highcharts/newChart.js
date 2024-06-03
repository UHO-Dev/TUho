Highcharts.chart('myChartBar',{
  chart:{
    type:'column'
  },
  title:{
    text:'Cantidad de Trámites'
  },
  exporting:{
    buttons:{
      contextButton:{
        enabled:true,
        menuItems:[{
          name:'Descargar imagen PNG',
          textKey:'downloadPNG',
          onclick: function(){
            this.exportChartLocal();
          }
        },{
          name:'Descargar imagen JPEG',
          textKey:'downloadJPEG',
          onclick: function(){
            this.exportChartLocal({
              type:'image/jpeg'
            });
        }
      },{
        name:'Descargar documento PDF',
        textKey:'downloadPDF',
        onclick: function(){
          this.exportChartLocal({
            type:'application/pdf'
          });
      }
        }]
      }
    }
  },

  xAxis:{
    categories: ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  },
  series:[{
    data:[
      {
        name:'Enero',
        color:'#0d6efd',
        y:15
      },
      {
        name:'Febrero',
        color:'#0d6efd',
        y:16
      },
      {
        name:'Marzo',
        color:'#0d6efd',
        y:17
      },
      {
        name:'Abril',
        color:'#0d6efd',
        y:18
      },
      {
        name:'Mayo',
        color:'#0d6efd',
        y:19
      },
      {
        name:'Junio',
        color:'#0d6efd',
        y:20
      },
      {
        name:'Julio',
        color:'#0d6efd',
        y:19
      },
      {
        name:'Agosto',
        color:'#0d6efd',
        y:18
      },
      {
        name:'Septiembre',
        color:'#0d6efd',
        y:16
      },
      {
        name:'Octubre',
        color:'#0d6efd',
        y:17
      },
      {
        name:'Noviembre',
        color:'#0d6efd',
        y:15
      },
      {
        name:'Diciembre',
        color:'#0d6efd',
        y:14
      }],
      responsive:{
        rules:[{
          condition:{
            maxWidth:500
          },
          chartOptions:{
            legend:{
              enabled:false
            }
          }
        }]
      }
  }]
})

Highcharts.chart('myChartPie',{
  chart:{
    type:'pie'
  },
  title:{
    text:'Estado de los Trámites'
  },
  exporting:{
    buttons:{
      contextButton:{
        enabled:true,
        menuItems:[{
          name:'Descargar imagen PNG',
          textKey:'downloadPNG',
          onclick: function(){
            this.exportChartLocal();
          }
        },{
          name:'Descargar imagen JPEG',
          textKey:'downloadJPEG',
          onclick: function(){
            this.exportChartLocal({
              type:'image/jpeg'
            });
        }
      },{
        name:'Descargar documento PDF',
        textKey:'downloadPDF',
        onclick: function(){
          this.exportChartLocal({
            type:'application/pdf'
          });
      }
        }]
      }
    }
  },

  xAxis:{
    categories: ['En espera','Aceptado','Procesando','Listo para recoger', 'Entregado', 'Completado']
  },
  tooltip:{
    pointFormat:'{series.name}:<b>{point.percentage: .2f}</b>%'
  },
  plotOptions:{
    allowPointSelect:true,
    cursor:'pointer',
    dataLabels:{
      eneabled:true,
      format:'{series.name}:<b>{point.percentage: .2f}</b>%'
    }
  },
  series:[{
    name:'Estado de los trámites',
    colorByPoint:true,
    data:[
      {
        name:'En espera',
        y:15
      },
      {
        name:'Aceptado',
        y:16
      },
      {
        name:'Procesando',
        y:17
      },
      {
        name:'Listo para recoger',
        y:18
      },
      {
        name:'Entregado',
        y:19
      },
      {
        name:'Completado',
        y:20
      }],
      responsive:{
        rules:[{
          condition:{
            maxWidth:500
          },
          chartOptions:{
            legend:{
              layout:'horizontal',
              align:'center',
              verticalAlign:'bottom'
            }
          }
        }]
      }
  }]
})

Highcharts.chart('myChartPieModulo',{
  chart:{
    type:'pie'
  },
  title:{
    text:'Cantidad de Trámites por Módulos'
  },
  exporting:{
    buttons:{
      contextButton:{
        enabled:true,
        menuItems:[{
          name:'Descargar imagen PNG',
          textKey:'downloadPNG',
          onclick: function(){
            this.exportChartLocal();
          }
        },{
          name:'Descargar imagen JPEG',
          textKey:'downloadJPEG',
          onclick: function(){
            this.exportChartLocal({
              type:'image/jpeg'
            });
        }
      },{
        name:'Descargar documento PDF',
        textKey:'downloadPDF',
        onclick: function(){
          this.exportChartLocal({
            type:'application/pdf'
          });
      }
        }]
      }
    }
  },

  xAxis:{
    categories: ['Secretaría Docente']
  },
  tooltip:{
    pointFormat:'{series.name}:<b>{point.percentage: .2f}</b>%'
  },
  plotOptions:{
    allowPointSelect:true,
    cursor:'pointer',
    dataLabels:{
      eneabled:true,
      format:'{series.name}:<b>{point.percentage: .2f}</b>%'
    }
  },
  series:[{
    name:'Categoría de Trámites',
    colorByPoint:true,
    data:[
      {
        name:'Secretaría Docente',
        y:15
      }],
      responsive:{
        rules:[{
          condition:{
            maxWidth:500
          },
          chartOptions:{
            legend:{
              layout:'horizontal',
              align:'center',
              verticalAlign:'bottom'
            }
          }
        }]
      }
  }]
})


Highcharts.chart('myChartBarFueraFecha',{
  chart:{
    type:'column'
  },
  title:{
    text:'Cantidad de Trámites Fuera de Fecha'
  },
  exporting:{
    buttons:{
      contextButton:{
        enabled:true,
        menuItems:[{
          name:'Descargar imagen PNG',
          textKey:'downloadPNG',
          onclick: function(){
            this.exportChartLocal();
          }
        },{
          name:'Descargar imagen JPEG',
          textKey:'downloadJPEG',
          onclick: function(){
            this.exportChartLocal({
              type:'image/jpeg'
            });
        }
      },{
        name:'Descargar documento PDF',
        textKey:'downloadPDF',
        onclick: function(){
          this.exportChartLocal({
            type:'application/pdf'
          });
      }
        }]
      }
    }
  },

  xAxis:{
    categories: ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  },
  series:[{
    data:[
      {
        name:'Enero',
        color:'#0d6efd',
        y:10
      },
      {
        name:'Febrero',
        color:'#0d6efd',
        y:14
      },
      {
        name:'Marzo',
        color:'#0d6efd',
        y:20
      },
      {
        name:'Abril',
        color:'#0d6efd',
        y:5
      },
      {
        name:'Mayo',
        color:'#0d6efd',
        y:9
      },
      {
        name:'Junio',
        color:'#0d6efd',
        y:24
      },
      {
        name:'Julio',
        color:'#0d6efd',
        y:16
      },
      {
        name:'Agosto',
        color:'#0d6efd',
        y:5
      },
      {
        name:'Septiembre',
        color:'#0d6efd',
        y:24
      },
      {
        name:'Octubre',
        color:'#0d6efd',
        y:9
      },
      {
        name:'Noviembre',
        color:'#0d6efd',
        y:13
      },
      {
        name:'Diciembre',
        color:'#0d6efd',
        y:15
      }],
      responsive:{
        rules:[{
          condition:{
            maxWidth:500
          },
          chartOptions:{
            legend:{
              enabled:false
            }
          }
        }]
      }
  }]
})