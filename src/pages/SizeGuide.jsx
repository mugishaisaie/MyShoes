import React from 'react'
import sizeGuide from '../data/sizeGuide'

export default function SizeGuide() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold">Shoe Size Guide</h1>
      <p className="text-slate-600 mt-2">Use this table to approximate EU sizes to centimeters.</p>

      <div className="mt-6 overflow-auto">
        <table className="w-full border rounded">
          <thead className="bg-slate-100">
                   <h1 className="text-2xl font-bold dark:text-white">Shoe Size Guide</h1>
                   <p className="text-slate-600 dark:text-slate-400 mt-2">Use this table to approximate EU sizes to centimeters.</p>
                   <table className="w-full border dark:border-slate-700 rounded">
                     <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="p-2 text-left">EU Size</th>
              <th className="p-2 text-left">Length (cm