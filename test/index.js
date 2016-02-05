import {expect} from 'chai';

import {parse} from '../src';

var loadFixture = function(name) {
  return `${__dirname}/fixtures/${name}.yml`;
};

describe('parse', function() {
  before(function () {
    let file = loadFixture('scheme');

    this.context = parse(file);
  });

  it('should set the name correctly', function() {
    expect(this.context.name).to.equal('Dark Fusion');
  });

  it('should set the background correctly', function() {
    expect(this.context.background).to.equal('#212A35');
  });

  it('should set the caret correctly', function() {
    expect(this.context.caret).to.equal('#819090');
  });

  it('should set the foreground correctly', function() {
    expect(this.context.foreground).to.equal('#D5D2C3');
  });

  it('should set the invisibles correctly', function() {
    expect(this.context.invisibles).to.equal('#93A1A1');
  });

  it('should set the lineHighlight correctly', function() {
    expect(this.context.lineHighlight).to.equal('#364353');
  });

  it('should set the selection correctly', function() {
    expect(this.context.selection).to.equal('#3C434B');
  });

  it('should set the semanticClass correctly', function() {
    expect(this.context.semanticClass).to.equal('theme.dark.dark_fusion');
  });
});
