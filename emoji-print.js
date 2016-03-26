(function() {
  'use strict';

  var proto = Object.create(HTMLElement.prototype);

  proto.createdCallback = function() {
    var canvas = document.createElement('canvas');
    let size = this.getAttribute('size');

    canvas.setAttribute('width', size * window.devicePixelRatio + 'px');
    canvas.setAttribute('height', size * window.devicePixelRatio + 'px');

    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';

    this.ctx = canvas.getContext('2d');
    this.ctx.font = "40px Arial"
    this.appendChild(canvas);
  };

  proto.getCodePoint = function() {
    return emojiMap[this.getAttribute('emoji')];
  },

  proto.attachedCallback = function() {
    this.ctx.fillText(
      String.fromCodePoint(this.getCodePoint()), 0, 40);
  };

  document.registerElement('emoji-print', {
    prototype: proto,
  });
})();
