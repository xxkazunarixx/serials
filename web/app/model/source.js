// @flow

import {Get, Post, Put, Del, url} from '../api'


// SourceModel //////////////////////////////////////


export type Source = {
  id: string;
  importSettings: any;
  disabled: bool;
  name: string;
  author: string;
  url: string;
  imageUrl: string;
  imageMissingTitle: boolean;
  lastScan?: Scan;
}

export type Scan = {
  date: string;
  total: number;
  new: Array<string>;
  updated: Array<string>;
}


export var SourceModel = {
  findAll() {
    return Get(url('sources'))
  },

  find(id:string) {
    return Get(url('sources', id))
  },

  create(source:Source) {
    // clear the id
    source.id = ""
    return Post(url('sources'), source)
  },

  del(id:string) {
    return Del(url('sources', id))
  },

  save(id:string, source:Source) {
    return Put(url('sources', id), source)
  }
}


export var Menu = "MenuSettings"
export var TOC = "TOCSettings"


export function emptySource():Source {
  return {
    id: "",
    disabled: false,
    name: "",
    author: "",
    url: "",
    imageUrl: "",
    imageMissingTitle: false,
    importSettings: {
      tag: TOC,
    }
  }
}


export function emptyScan():Scan {
  return {
    date: "",
    new: [],
    updated: [],
    total: 0
  }
}
