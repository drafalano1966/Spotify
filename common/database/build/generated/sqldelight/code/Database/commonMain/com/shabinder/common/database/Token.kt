package com.shabinder.common.database

import kotlin.Long
import kotlin.String

public data class Token(
  public val tokenIndex: Long,
  public val accessToken: String,
  public val expiry: Long
) {
  public override fun toString(): String = """
  |Token [
  |  tokenIndex: $tokenIndex
  |  accessToken: $accessToken
  |  expiry: $expiry
  |]
  """.trimMargin()
}
