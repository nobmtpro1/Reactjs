import React from 'react'

const Tab1 = ( { participants, playerSelect } ) =>
{
	const player1 = participants[ playerSelect ]
	const player2 = participants[ playerSelect + 5 ]

	console.log(player1)
	return (
		<>
			<div className='left'>
				<div className='box'>
					<div className='big'>
						{ player1?.totalGoldEarned }
					</div>
					<div className='small'>
						GOLD EARNED
					</div>
				</div>
				<div className='box'>
					<div className='big'>
						{ `${ player1?.kills }/${ player1?.deaths }/${ player1?.assists }` }
					</div>
					<div className='small'>
						K / D / A
					</div>
				</div>
				<div className='box'>
					<div className='big'>
						{ Math.round(player1?.killParticipation*100)  }%
					</div>
					<div className='small'>
						KILL PARTICIPATION
					</div>
				</div>
				<div className='box'>
					<div className='big'>
						{ player1?.creepScore }
					</div>
					<div className='small'>
						MINION KILLS (CS)
					</div>
				</div>
				<div className='box'>
					<div className='big'>
						{ player1?.wardsPlaced }
					</div>
					<div className='small'>
						WARDS PLACED
					</div>
				</div>
				<div className='box'>
					<div className='big'>
					{ Math.round(player1?.championDamageShare*100)  }%
					</div>
					<div className='small'>
						CHAMPION DAMAGE SHARE
					</div>
				</div>
				<div className='box'>
					<div className='big'>
						{ player1?.wardsDestroyed }
					</div>
					<div className='small'>
						WARDS DESTROYED
					</div>
				</div>
			</div>
			<div className='right'>
				<div className='box'>
					<div className='big'>
						{ player2?.totalGoldEarned }
					</div>
					<div className='small'>
						GOLD EARNED
					</div>
				</div>
				<div className='box'>
					<div className='big'>
						{ `${ player2?.kills }/${ player2?.deaths }/${ player2?.assists }` }
					</div>
					<div className='small'>
						K / D / A
					</div>
				</div>
				<div className='box'>
					<div className='big'>
					{ Math.round(player2?.killParticipation*100)  }%
					</div>
					<div className='small'>
						KILL PARTICIPATION
					</div>
				</div>
				<div className='box'>
					<div className='big'>
						{ player2?.creepScore }
					</div>
					<div className='small'>
						MINION KILLS (CS)
					</div>
				</div>
				<div className='box'>
					<div className='big'>
						{ player2?.wardsPlaced }
					</div>
					<div className='small'>
						WARDS PLACED
					</div>
				</div>
				<div className='box'>
					<div className='big'>
						{ Math.round(player2?.championDamageShare*100)  }%
					</div>
					<div className='small'>
						CHAMPION DAMAGE SHARE
					</div>
				</div>
				<div className='box'>
					<div className='big'>
						{ player2?.wardsDestroyed }
					</div>
					<div className='small'>
						WARDS DESTROYED
					</div>
				</div>
			</div>
		</>
	)
}

export default Tab1