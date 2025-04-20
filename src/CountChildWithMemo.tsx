import { memo } from 'react';

export const CountChildWithMemo = memo(() => {

    return (
        <div className="card">
            I am a child with Memo
        </div>
    )
})