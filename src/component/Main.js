import React, {useEffect, useState} from "react"
import {Link as NavLink} from 'react-router-dom';
import { Pagination, PaginationItem, Stack, Link } from '@mui/material'
import axios from "axios"
import User from "./User";
const BASE_URL = 'https://reqres.in/api/users?'

const Main = () => {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(0)

    useEffect(() => {
        axios.get(BASE_URL +`page=${page}`).then(
            ({data}) => {
                console.log(data)
                setUsers(data.data)
                setPageQty(data.total_pages)
            }
        )
    }, [page])

    return (
        <>
            <Stack spacing={2}>
                {pageQty && (
                    <Pagination
                        count={pageQty}
                        page={page}
                        onChange={(_, num) => setPage(num)}
                        renderItem={
                            (item) => (
                                <PaginationItem
                                    component={NavLink}
                                    to={`/?page=${item.page}`}
                                    {...item}
                                />
                            )
                        }
                    />
                )}
                {
                    users.map(user => (
                        <Link
                            key={user.id}
                            href={`/${user.id}`}
                        >
                            {user.first_name} {user.last_name}
                        </Link>
                    ))
                }
            </Stack>
        </>
    );
};

export default Main;