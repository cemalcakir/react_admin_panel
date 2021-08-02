import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, DateField } from 'react-admin'

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'></TextField>
                <TextField source='title'></TextField>
                <DateField source='publishedAt'></DateField>
                <EditButton basePath='/posts'></EditButton>
                <DeleteButton basePath='/posts'></DeleteButton>
            </Datagrid>
        </List>
    )
}

export default PostList
