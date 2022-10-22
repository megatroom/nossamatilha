import Link from 'next/link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { ReactNode } from 'react'

export interface DataModelColumn {
  name: string
  label: string
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}

export interface DataModelCell {
  value: ReactNode
  linkTo?: string
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}

export interface DataModelRow {
  cells: DataModelCell[]
}

export interface DataModel {
  columns: DataModelColumn[]
  rows: DataModelRow[]
}

interface Props {
  id: string
  model: DataModel
}

export default function DataTable({ id, model }: Props) {
  return (
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {model.columns.map((column) => (
                <TableCell
                  key={`${id}-column-${column.name}`}
                  align={column.align || 'inherit'}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {model.rows.map((row, rowIdx) => (
              <TableRow
                key={`${id}-row-${rowIdx}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {row.cells.map((cell, cellIdx) => {
                  let value = cell.value

                  if (cell.linkTo) {
                    value = <Link href={cell.linkTo}>{cell.value}</Link>
                  }

                  return (
                    <TableCell
                      key={`${id}-${rowIdx}-cell-${cellIdx}`}
                      align={cell.align || 'inherit'}
                    >
                      {value}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}
