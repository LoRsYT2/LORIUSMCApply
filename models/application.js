const mongoose = require('mongoose');
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
  data: { type: Schema.Types.Mixed, required: true }, // كل الحقول ترسل هنا
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
