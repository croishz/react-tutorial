import React, { useReducer, useEffect, useCallback } from 'react'
import axios from 'axios'

// 관리해야 할 상태값 : api 서버에 요청한 데이터, 요청 중인지 전인지 여부, 에러 여부.
function reducer(state, action) {
	switch (action.type) {
		case 'RELOADING':
			return {
				...state,
				loading: true,
			}
		case 'LOADED':
			return {
				...state,
				loading: false,
			}
		case 'SUCCESS':
			return {
				loading: false,
				data: action.data,
				error: null,
			}
		case 'ERROR':
			console.log('error action')
			return {
				...state,
				error: action.event,
			}
		default:
			throw new Error('unhandled action : ', action)
	}
}
async function getUsers() {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/users',
	)
	return response.data
}
function useAsync(callback, deps, skip = false) {
	const [state, dispatch] = useReducer(reducer, {
		loading: false,
		data: null,
		error: null,
	})
	const { loading } = state
	const fetchUsers = useCallback(async () => {
		console.log(Date.now())
		if (loading === false) {
			dispatch({
				type: 'RELOADING',
			})
		}
		try {
			const data = await callback()
			dispatch({
				type: 'SUCCESS',
				data,
			})
		} catch (event) {
			console.dir(event)
			dispatch({
				type: 'ERROR',
				event,
			})
		}
		dispatch({
			type: 'LOADED',
		})
	}, [loading, callback])

	useEffect(() => {
		if (skip === true) {
			return null
		}
		fetchUsers()
	}, deps)

	return [state, fetchUsers]
}
function Users() {
	const [state, refetch] = useAsync(getUsers, [], true)
	const { data: users, loading, error } = state

	// Load or Reload
	if (loading) {
		return <div>로딩 중입니다.</div>
	}

	// Final massege
	if (error !== null) {
		return <div>"Error code : " + {error.response.status}</div>
	}

	// success
	return (
		console.log(Date.now()),
		console.log(users),
		(
			<>
				{!users ? (
					<div>데이터가 존재하지 않습니다.</div>
				) : (
					<ul>
						{users.map((user) => (
							<li key={user.id.toString()}>
								{user.name}, {user.address.suite}
							</li>
						))}
					</ul>
				)}
				<button type='button' onClick={refetch}>
					Reload
				</button>
			</>
		)
	)
}
function App() {
	return <Users />
}

export default App
