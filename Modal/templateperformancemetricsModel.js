const mongoose = require('mongoose');

const MetricsSchema = new mongoose.Schema({
  template_id: String,
  template_name: String,
  template_language: String,
  messages_sent_7d: Number,
  messages_opened_7d: Number,
  top_block_reason: String
});

const metricsSchema = new mongoose.Schema({
  templates_performance_metrics: [MetricsSchema],
  field:{type:String,required:true}
});

const templateperformancemetricsModel = mongoose.model('templateperformancemetrics', metricsSchema);

module.exports=templateperformancemetricsModel
