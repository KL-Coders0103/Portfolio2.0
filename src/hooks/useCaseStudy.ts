import { useEffect, useState } from 'react'

import {
  caseStudies,
  type CaseStudy,
} from '../config/caseStudies'

type ProjectId = keyof typeof caseStudies

function getProjectId(): ProjectId | null {
  const match = window.location.hash.match(
    /^#case-study\/(.+)$/,
  )

  const id = match?.[1]

  if (!id) {
    return null
  }

  if (id in caseStudies) {
    return id as ProjectId
  }

  return null
}

export function useCaseStudy() {
  const [projectId, setProjectId] =
    useState<ProjectId | null>(
      getProjectId(),
    )

  useEffect(() => {
    const handleHashChange = () => {
      setProjectId(getProjectId())
    }

    window.addEventListener(
      'hashchange',
      handleHashChange,
    )

    return () => {
      window.removeEventListener(
        'hashchange',
        handleHashChange,
      )
    }
  }, [])

  const data: CaseStudy | null =
    projectId
      ? caseStudies[projectId]
      : null

  return {
    projectId,
    data,
    isCaseStudy: Boolean(data),
  }
}