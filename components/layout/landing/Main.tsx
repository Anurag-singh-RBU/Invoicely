import SkeletonOne from '@/components/skeletons/first'
import { Card, CardContent, CardSkeleton, CardTitle } from '@/components/ui/card'
import React from 'react'

const Main = () => {
  return (
     <div className="grid grid-flow-row sm:h-auto sm:grid-cols-3 border-b border-dashed gap-4 sm:gap-0 py-4">
        <Card>
            <CardSkeleton>
                <SkeletonOne/>
            </CardSkeleton>
            <CardContent>
                <CardTitle>
                    Curated Tools just Built <br></br> for Your Process
                </CardTitle>
            </CardContent>
        </Card>
        <div className="border-l border-dashed sm:h-auto">
            <Card>
                <CardSkeleton>
                    <SkeletonOne/>
                </CardSkeleton>
                <CardContent>
                    <CardTitle>
                        Curated Tools just Built <br></br>for Your Process
                    </CardTitle>
                </CardContent>
            </Card>
        </div>
        <div className="border-l border-dashed sm:h-auto">
            <Card>
                <CardSkeleton>
                    <SkeletonOne/>
                </CardSkeleton>
                <CardContent>
                    <CardTitle>
                        Curated Tools just Built <br></br>for Your Process
                    </CardTitle>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Main